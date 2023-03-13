import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss']
})
export class HardwareComponent implements OnInit {

  hardware = [
    { name: "Материнська плата", desc: "TUF Gaming B550M-Plus" },
    { name: "Процесор", desc: "AMD Ryzen 5 5600X 6-Core Processor 3.70 GHz" },
    { name: "Відеокарта", desc: "NVIDIA GeForce RTX 3070 Ti" },
    { name: "Оперативна пам'ять", desc: "Kingston Fury DDR4-3200 8 GB (x4)" },
    { name: "Навушники", desc: "Logitech G PRO X" },
    { name: "Мікрофон", desc: "Rode NT-USB" },
    { name: "Клавіатура", desc: "Motospeed CK104 USB" },
    { name: "Миша", desc: "Bloody R70A Wireless" },
    { name: "Геймпад", desc: "PlayStation 5 Dualsense White (x2)" },
    { name: "Монітор", desc: '27" AOC Q27G2U' },
    { name: "Веб-камера", desc: "Logitech Webcam HD Pro C920" },
    { name: "Диск", desc: "Kingston NVME M.2 SSD 1TB (x2)" },
    { name: "Корпус", desc: "NZXT H510 Matte Black-Red" }
  ]
  ngOnInit() {
    console.log(this.hardware)
  }
  mySortingFunction = (a: any, b: any) => {
    return a.key > b.key ? -1 : 1;
  }

}
