import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
data
datam
d=[]
groupp=[]
groupss
permission: any[] = [];
  constructor() { }
 

  ngOnInit(): void {
    this.data={campaign: [ { id: 282, campaign_id: 'bdcom', user_id: 'farhan', priority: 0 },{ id: 282, campaign_id: 'iptsp', user_id: 'farhan', priority: 0 },{ id: 282, campaign_id: 'bdcom', user_id: 'farhan', priority: 0 } ]}
    const groupse = this.data.campaign.reduce((groupse, item) => {
      const group = (groupse[item.campaign_id] || []);
      group.push(item);
      groupse[item.campaign_id] = group;
      this.permission[item.campaign_id]=group
      return groupse;
    }, {});
    this.d.push(groupse)
    this.datam=this.d
    console.log(this.d)
    this.data.campaign.forEach(element => {
      this.groupp.push(element);
      //this.groupss[element.group] = this.groupp;
      //this.d[element.campaign_id].push(element)
      console.log(this.groupp)
    });



    const list = [{
      'name': 'Display',
      'group': 'Technical detals',
      'id': '60',
      'value': '4'
    },
    {
      'name': 'Manufacturer',
      'group': 'Manufacturer',
      'id': '58',
      'value': 'Apple'
    },
    {
      'name': 'OS',
      'group': 'Technical detals',
      'id': '37',
      'value': 'Apple iOS'
    }
  ];
  
  // const groups = list.reduce((groups, item) => {
  //   const group = (groups[item.group] || []);
  //   group.push(item);
  //   groups[item.group] = group;
  //   return groups;
  // }, {});
  // this.d.push(groups)
  // console.log(this.d);


  }

}
