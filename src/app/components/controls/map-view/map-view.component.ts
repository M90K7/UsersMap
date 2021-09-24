import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import {
  latLng, Map, Marker, marker, tileLayer
} from 'leaflet';

import { MapModel } from "./map-model";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnChanges, OnInit, AfterViewInit {

  @Input()
  items?: MapModel[];

  options: any = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 1
  };
  layersControl: any = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      // 'Big Circle': circle([46.95, -122], { radius: 5000 }),
      // 'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    }
  };
  layers: Marker[] = [
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const _items = changes["items"];
    if (_items && _items.currentValue) {
      this.setItems();
    }
  }

  setItems() {
    if (Array.isArray(this.items)) {
      for (const item of this.items) {
        this.options.center = latLng(item.lat, item.long);
        this.layers = [
          marker({ lat: item.lat, lng: item.long }).bindPopup(item.title).openPopup()
        ];
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
