import { Component, Input } from '@angular/core';
import { Origins } from 'src/app/share/models/Origins';
import { OriginsService } from 'src/app/services/origins/origins.service';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrls: ['./origins.component.css']
})
export class OriginsComponent {

  @Input()
  origins?:Origins[];

}
