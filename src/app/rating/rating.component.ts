import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  ratingForm = new FormGroup({
    rating: new FormControl('')
  })
  protected formSuccess: Boolean = false

  constructor (private router: Router, private route: ActivatedRoute) {}

  onSubmit () {
    console.log(this.ratingForm.value)
    this.formSuccess = true
  }
}
