import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  selectedCountryAdvanced!: Country;
  filteredCountries!: any[];
  countries!: any[];
  
  constructor() { }

  ngOnInit(): void {

    this.countries = [
      { nombre: 'Mexico', continente: 'America'},
      { nombre: 'Argentina', continente: 'America'},
      { nombre: 'Colombia', continente: 'America'},
      { nombre: 'Peru', continente: 'America'},
      { nombre: 'España', continente: 'Europa'},
      { nombre: 'Roma', continente: 'Europa'},
      { nombre: 'Francia', continente: 'Europa'},
      { nombre: 'China', continente: 'Asia'},
      { nombre: 'Japon', continente: 'Asia'},
      { nombre: 'Estados Unidos', continente: 'America'},
      { nombre: 'Canada', continente: 'America'},
    ]; 
  }


  filterCountry(event: any) {
    let filtered : any[] = [];
    let query = event.query;
    
    filtered = this.countries.filter(country => {
      // return country.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1
      return country.nombre.toLowerCase().includes(query.toLowerCase())
    
    });

    
    this.filteredCountries = filtered;
    console.log(`this.filteredCountries: `, this.filteredCountries);
  }

  mostrarPaisSeleccionado(event: any): void {
    console.log(`nombre seleccionado: `, this.selectedCountryAdvanced.nombre);
    //const {nombre, continente} = this.selectedCountryAdvanced;
    //console.log('nombre: ', nombre);
  }

}
