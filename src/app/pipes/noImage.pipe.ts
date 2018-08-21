import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: Array<any>): string {

    if (images.length > 0) {
      return images[0].url;
    }
    return 'assets/img/noimage.png';
  }

}
