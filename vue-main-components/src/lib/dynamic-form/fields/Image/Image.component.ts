import { ImageMode } from "@/types/form.interfaces";
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import BaseFieldComponent from "../BaseField.mixin";
import Template from "./Image.template.vue";

@Component({
  mixins: [Template],
})
export default class ImageComponent extends Mixins(BaseFieldComponent) {
  public fileSelected: string = "";
  public fileToUpload: File | Blob | null = null;
  public isDragging: boolean = false;
  public video!: HTMLVideoElement;
  public canvas!: HTMLCanvasElement;
  public mode: ImageMode = ImageMode.select;
  public imageModel: typeof ImageMode = ImageMode;
  @Prop({ default: () => "image" }) public icon!: string;

  public fileChangeEvent(image: any) {
    if (!image) {
      this.fileSelected = "";
    } else {
      this.fileToUpload = (image.target!.files
        ? image.target!.files[0]
        : image.dataTransfer!.files[0]) as File;
      const reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      reader.onloadend = () => {
        this.fileSelected = reader.result as string;
      };
      this.changeModel(this.fileToUpload);
    }
  }

  public onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    this.fileChangeEvent(event);
  }

  public onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  public onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  @Watch("model")
  public changeValue() {
    this.value = this.model
      ? this.model[this.field.options!.defaultImageField!]
      : this.field.defaultValue || null;
  }

  public mounted() {
    this.video = this.$refs.video as HTMLVideoElement;
    this.canvas = this.$refs.canvas as HTMLCanvasElement;
  }

  public launchCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.mode = ImageMode.camera;
          this.video!.srcObject = stream;
          this.video!.play();
        })
        .catch((e) => {
          this.mode = ImageMode.select;
        });
    }
  }

  public capture() {
    this.canvas
      .getContext("2d")!
      .drawImage(this.video as HTMLVideoElement, 0, 0, 640, 480);
    const image: string = this.canvas.toDataURL("image/png");
    this.fileSelected = image;
    this.fileToUpload = this.dataURItoBlob(this.fileSelected);
    this.changeModel(this.fileToUpload);
    this.mode = ImageMode.select;
    this.closeCamera();
  }

  public dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  public closeCamera() {
    if (this.video!.srcObject) {
      (this.video!.srcObject! as MediaStream).getTracks()[0].stop();
    }
    this.mode = ImageMode.select;
  }

  public resetImage() {
    const file = this.$refs.fileInput as HTMLInputElement;
    file.value = "";
    this.fileSelected = "";
    this.value = null;
    this.changeModel(null);
  }

  public destroyed() {
    this.closeCamera();
  }
}
