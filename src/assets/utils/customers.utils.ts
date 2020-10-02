import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.itemsPerPageLabel = 'Itens por página:';
    customPaginatorIntl.previousPageLabel = "Página anterior";
    customPaginatorIntl.nextPageLabel = "Próxima página";
    return customPaginatorIntl;
}