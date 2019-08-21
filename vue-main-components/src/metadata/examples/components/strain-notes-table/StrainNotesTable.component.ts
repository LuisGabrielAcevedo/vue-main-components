import StrainNotesFormComponent from "@/metadata/examples/components/strain-notes-form/StrainNotesForm.component";
import ModalsService from "@/services/modal.service";
import { Component, Vue } from "vue-property-decorator";
import Template from "./StrainNotesTable.template.vue";

@Component({
    mixins: [Template],
})
export default class StrainNotesTableComponent extends Vue {
    public notes: Note[] = [];
    public headers: Array<{ value: string; text: string; }> = [
        {
            text: "Topic",
            value: "name",
        },
        {
            text: "Note",
            value: "note",
        },
    ];
    protected modal$!: ModalsService<any>;
    public mounted() {
        this.modal$ = this.$services.inject(ModalsService, this);
    }
    public async addNote() {
        try {
            const resp = await this.modal$.load(StrainNotesFormComponent);
            this.notes.push({
                name: resp.topic,
                title: resp.topic,
                note: resp.note,
                id: resp.id,
            });
            this.$emit("update-model", { key: "notes", value: this.notes });
        } catch (e) {
            //
        }
    }
}

export interface Note {
    id: number | string;
    name: string;
    title: string;
    note: string;
}
