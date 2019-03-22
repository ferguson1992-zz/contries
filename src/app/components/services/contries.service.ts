import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable ()

export class ContriesService {
    constructor(private http:HttpClient) {
    }

    getContries() {
        return this.http.get('https://restcountries.eu/rest/v2/all');
    }
}
