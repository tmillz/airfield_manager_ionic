import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { RegSubPage } from '../reg-sub/reg-sub';

@IonicPage()

@Component({
  selector: 'page-regulations',
  templateUrl: 'regulations.html'
})

export class RegulationsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, contents: any}>;
  regsubPage = RegSubPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [
      { title: 'AFIs: Air Force Instructions', contents:[{'title': 'AFI 13-204v3 Airfieled Managment Operations!', 'link':'http://static.e-publishing.af.mil/production/1/af_a3/publication/afi13-204v3/afi13-204v3.pdf' },
                                                         {'title': 'AFI 13-204v2 Airfield Operations Standardization and Evaluations', 'link':'http://static.e-publishing.af.mil/production/1/af_a3/publication/afi13-204v2/afi13-204v2.pdf'},
                                                         {'title': 'AFI 13-204v1 Airfield Operations Career Field Development', 'link': 'http://static.e-publishing.af.mil/production/1/af_a3/publication/afi13-204v1/afi13-204v1.pdf'},
                                                         {'title': 'AFI 13-213 Airfield Driving', 'link': 'http://static.e-publishing.af.mil/production/1/af_a3/publication/afi13-213/afi13-213.pdf'},
                                                         {'title': 'AFI 11-208IP Department of Defense Notice to Airment System', 'link':'http://static.e-publishing.af.mil/production/1/af_a3/publication/afi11-208_ip/afi11-208_ip.pdf'},
                                                         {'title': 'AFI 11-218 Aircraft Operations and Movement on the Ground', 'link': 'http://static.e-publishing.af.mil/production/1/af_a3/publication/afi11-218/afi11-218.pdf'},
                                                         {'title': 'AFI 13-217 Drop Zone and Landing Zone Operations', 'link': 'http://static.e-publishing.af.mil/production/1/af_a3_5/publication/afi13-217/afi13-217.pdf'},
                                                         {'title': 'AFI 10-1001 Civil Aircraft Landing Permits', 'link': 'http://static.e-publishing.af.mil/production/1/af_a3_5/publication/afi10-1001/afi10-1001.pdf'},
                                                         {'title': 'AFI 10-1801 Foreign Governmental Aircraft Landings at USAF Installations', 'link': 'http://static.e-publishing.af.mil/production/1/af_a3_5/publication/afi10-1801/afi10-1801.pdf'},
                                                         {'title': 'AFMAN 32-1084 Facility Requirements', 'link': 'http://static.e-publishing.af.mil/production/1/af_a4/publication/afman32-1084/afman32-1084.pdf'},
                                                         {'title': 'AFPAM 91-212 Bird/Aircraft Strike Hazard (BASH) Reduction Program', 'link':'http://static.e-publishing.af.mil/production/1/af_se/publication/afpam91-212/afpam91-212.pdf'},
                                                         {'title': 'AFI 32-1041 Pavement Evaluation Program', 'link': 'http://static.e-publishing.af.mil/production/1/af_a4/publication/afi32-1041/afi32-1041.pdf'},
                                                         {'title': 'AFI 32-1043 Managing, Operating, and Maintaining Aircraft Arresting Systems', 'link': 'http://static.e-publishing.af.mil/production/1/af_a4/publication/afi32-1043/afi32-1043.pdf'}]},
      { title: 'UFCs: Unified Facility Criteria', contents: [{'title':'UFC 3-260-01 Airfield and Heliport Planning and Design', 'link':'https://www.wbdg.org/FFC/DOD/UFC/ufc_3_260_01_2008.pdf'},
                                                             {'title':'UFC 3-260-02 Pavement Design For Airfields', 'link':'https://www.wbdg.org/FFC/DOD/UFC/ufc_3_260_02_2001.pdf'},
                                                             {'title':'UFC 3-260-03 Airfield Pavement Evaluation', 'link': 'https://www.wbdg.org/FFC/DOD/UFC/ufc_3_260_03_2001.pdf'},
                                                             {'title':'UFC 3-270-05 Paver Concrete Surfaced Airfields Pavement Condition Index (PCI)', 'link': 'https://www.wbdg.org/FFC/DOD/UFC/ufc_3_270_05_2001.pdf'},
                                                             {'title':'UFC 3-270-06 Paver Asphalt Surfaced Airfields Pavement Condition Index (PCI)', 'link': 'https://www.wbdg.org/FFC/DOD/UFC/ufc_3_270_06_2001.pdf'},
                                                             {'title': 'UFC 3-535-01 Visual Air Navigation Facilities', 'link': 'https://www.wbdg.org/FFC/DOD/UFC/ufc_3_535_01_2017.pdf'}]},
      { title: 'ETLs: Engineering Technical Letters', contents: [{'title':'ETL 02-19 Air Field Pavement Evaluation Standards and Procedures', 'link':'https://www.wbdg.org/FFC/AF/AFETL/etl_02_19.pdf'},
                                                                 {'title':'ETL 04-2 Standards Airfield Pavement Marking Schemes, with Change 2','link':'https://www.wbdg.org/FFC/AF/AFETL/etl_04_2.pdf'},
                                                                 {'title':'ETL 07-3 Jet Engine Trust Standoff Requirements for Airfield Asphalt Edge Pavements', 'link':'https://www.wbdg.org/FFC/AF/AFETL/etl_07_3.pdf'},
                                                                 {'title':'UFGS 32 01 11.51 Rubber and Paint Removal From Airfield Pavements','link':'https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2032%2001%2011.51.pdf'}] },
      { title: 'FAA: Federal Aviation Administration', contents: [{'title':'AC 150/5200-18 Airport Safety Self-Inspection', 'link':'https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.current/documentNumber/150_5200-18'},
                                                                  {'title':'AC 150/5300-13 Airport Design', 'link':'https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.current/documentNumber/150_5300-13'},
                                                                  {'title':'AC 150/5340-1 Standards for Airport Markings', 'link':'https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.current/documentNumber/150_5340-1'},
                                                                  {'title':'AC 150/5340-18 Standards for Airport Sign Systems', 'link':'https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.current/documentNumber/150_5340-18'},
                                                                  {'title':'AC 150/5345-44 Specification for Runway and Taxiway Signs Document Information', 'link':'https://www.faa.gov/airports/resources/advisory_circulars/index.cfm/go/document.current/documentNumber/150_5345-44'}]},
      { title: 'MAJCOM Supplements', contents: [{'title':'AFI 13-204v1 ACCSUP', 'link':'http://static.e-publishing.af.mil/production/1/acc/publication/afi13-204v1_accsup/afi13-204v1.pdf'},
                                                {'title':'AFI 13-204v1 AFMCSUP', 'link':'http://static.e-publishing.af.mil/production/1/afmc/publication/afi13-204v1_afmcsup_i/afi13-204v1_afmcsup_i.pdf'},
                                                {'title':'AFI 13-204v1 AFSPCSUP', 'link':'http://static.e-publishing.af.mil/production/1/afspc/publication/afi13-204v1_afspcsup/afi13-204v1_afspcsup.pdf'},
                                                {'title':'AFI 13-204v1 PACAFSUP', 'link':'http://static.e-publishing.af.mil/production/1/pacaf/publication/afi13-204v1_pacafsup_i/afi13-204v1_pacafsup_i.pdf'},
                                                {'title':'AFI 13-204v1 USAFESUP', 'link':'http://static.e-publishing.af.mil/production/1/usafe/publication/afi13-204v1_usafesup/afi13-204v1_usafesup.pdf'},
                                                {'title':'AFI 13-204v2 ACCSUP', 'link':'http://static.e-publishing.af.mil/production/1/acc/publication/afi13-204v2_accsup/afi13-204v2_accsup.pdf'},
                                                {'title':'AFI 13-204v2 AFMCSUP', 'link':'http://static.e-publishing.af.mil/production/1/afmc/publication/afi13-204v2_afmcsup_i/afi13-204v2_afmcsup_i.pdf'},
                                                {'title':'AFI 13-204v2 USAFESUP', 'link':'http://static.e-publishing.af.mil/production/1/usafe/publication/afi13-204v2_usafesup/afi13-204v2_usafesup.pdf'},
                                                {'title':'AFI 13-204v3 ACCSUP', 'link':'http://static.e-publishing.af.mil/production/1/acc/publication/afi13-204v3_accsup_i/afi13-204v3_accsup.pdf'},
                                                {'title':'AFI 13-204v3 AETCSUP', 'link':'http://static.e-publishing.af.mil/production/1/aetc/publication/afi13-204v3_aetcsup/afi13-204v3_aetcsup.pdf'},
                                                {'title':'AFI 13-204v3 AFMCSUP', 'link':'http://static.e-publishing.af.mil/production/1/afmc/publication/afi13-204v3_afmcsup_i/afi13-204v3_afmcsup_i.pdf'},
                                                {'title':'AFI 13-204v3 AFSOCSUP', 'link':'http://static.e-publishing.af.mil/production/1/afsoc/publication/afi13-204v3_afsocsup/afi13-204v3_afsocsup.pdf'},
                                                {'title':'AFI 13-204v3 AMCSUP', 'link':'http://static.e-publishing.af.mil/production/1/amc/publication/afi13-204v3_amcsup_i/afi13-204v3_amcsup_i.pdf'},
                                                {'title':'AFI 13-204v3 PACAFSUP', 'link':'http://static.e-publishing.af.mil/production/1/pacaf/publication/afi13-204v3_pacafsup_i/afi13-204v3_pacafsup_i.pdf'},
                                                {'title':'AFI 13-204v3 USAFESUP', 'link':'http://static.e-publishing.af.mil/production/1/usafe/publication/afi13-204v3_usafesup/afi13-204v3_usafesup.pdf'},] }
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push('RegSubPage', {
      item: item
    });
  }

}
