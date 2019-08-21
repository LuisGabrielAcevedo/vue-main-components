export interface ModalsServiceOptions {
    [key: string]: any;
}

export interface ModalOptions {
    closeDelay: number;
    size: "normal" | "full_width" | "fit" | "min" | "small";
    title?: string;
    positionY: "center" | "top" | "bottom";
    positionX: "center" | "left" | "right";
}

export const ModalDefaultOptions: ModalOptions = {
    closeDelay: 0,
    size: "normal",
    positionY: "center",
    positionX: "center",
};
