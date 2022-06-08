import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConvertorService {
    toBase64(file: File): Promise<any> {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => resolve(reader.result)
        })
    }
}