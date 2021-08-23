import { Observable } from 'rxjs';

let isAsc = true;
export function sortByPropertyName(property: string) {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable((subscriber) => {
      return source.subscribe({
        next(data: any) {
          if (isAsc) {
            data = data.sort((a: any, b: any) => {
              return a[property] > b[property]
                ? 1
                : b[property] > a[property]
                ? -1
                : 0;
            });
          }
           else {
            data = data.sort((a: any, b: any) => {
              return a[property] > b[property]
                ? -1
                : b[property] > a[property]
                ? 1
                : 0;
            });
          }
          isAsc = !isAsc;
          return subscriber.next(data);
        },
      });
    });
  };
}
