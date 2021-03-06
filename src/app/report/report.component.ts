import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../servicers/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  orderDetails: any[];
  pageOrderDetails: any[];
  orderProductDetail: any[];
  page = 1;
  pageSize = 8;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.orderDetails = data['orderDetails'];
    });
    this.pageOrderDetails = [];
    this.refreshData();
  }
  refreshData() {
    if (this.pageOrderDetails && this.pageOrderDetails.length > 0) {
      this.pageOrderDetails = this.orderDetails
        .map((items, i) => ({ id: i + 1, items }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
  }

  viewExpand(expand: boolean, orderid: number) {
    if (expand) {
      this.orderService.getOrderProductDetails(orderid).subscribe(
        res => {
          this.orderProductDetail = res;
        }, error => {
          this.toastr.error('problem retrieving with data');
        });
    }
    else {
      console.log(orderid);
    }
  }
}
