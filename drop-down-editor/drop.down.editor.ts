import {AfterViewInit, Component, ViewChild, ViewContainerRef} from "@angular/core";

import {ICellEditorAngularComp} from "ag-grid-angular";

@Component({
    selector: 'dropdown-cell-editor',
    templateUrl: "drop.down.editor.html"
})
export class DropDownEditor implements ICellEditorAngularComp, AfterViewInit {
    private params: any;
    public value: number;
    private options: any;

    @ViewChild('input', {read: ViewContainerRef}) public input;


    agInit(params: any): void {
        this.params = params;
        this.value = this.params.value;
        this.options = params.options;

    }

    getValue(): any {
        return this.value;
    }

    ngAfterViewInit() {
        window.setTimeout(() => {
            this.input.element.nativeElement.focus();
        })
    }

}