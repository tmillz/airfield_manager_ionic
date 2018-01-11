import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aircraft-details',
  templateUrl: 'aircraft-details.html'
})
export class AircraftDetailsPage {
  selectedItem: any;
  icons: string[];
  item: Array<{id: number, name: string, alc_mgr: string, manufacturer: string, group_index: string, wing_span: string, length: string, height: string, vert_clr: string, tred: string, wheel_base: string, pivot_pt: string, turn_radius: string, turn_diameter: string, controlling_gear: string, basic_empty_wt: string, basic_miss_to_wt: string, max_to_wt: string, basic_miss_ldg_wt: string, max_ldg_wt: string, to_dist: string, to_dist_50: string, ldg_dist: string, ldg_dist_50: string, gear_config: string, nose: string, main: string, prec_gross_load_assemply: string, max_assemply_load: string, max_single_wheel_load: string, contact_pressure: string, contact_area: string, footprint_width_a: string, perc_gross_load_on_assemply: string, max_assemply_load_b: string, max_single_wheel_load_b: string,contact_pressure_b: string, contact_area_b: string, footprint_width_b: string, a: string, b: string, c: string, acn_weight_min: string, rigid_a: string, rigid_b: string, rigid_c: string, rigid_d: string, flex_a: string, flex_b: string, flex_c: string, flex_d: string, acn_max_weight: string, max_rigid_a: string, max_rigid_b: string, max_rigid_c: string, max_rigid_d: string, max_flex_a: string, max_flex_b: string, max_flex_c: string, max_flex_d: string, picr: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.item = navParams.get('item');
  }

}
