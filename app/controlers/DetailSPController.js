var ungdungAngularjs = angular.module("ungdungAngularJS", []);

ungdungAngularjs.controller("DetailSPController",function($scope){


    $scope.sanpham={
    id:1,
    ten:"Vé Buffer ngày 30/6/2016",
    gia:150000,
    img : "tick1.png",
    mota : "Thực đơn bao gồm : Gà hầm ngũ quả, Thịt kho tộ, Cơm chiên dương châu, Bánh Xèo miền Tây, Bò nướng lá lốt, Gà chiên bơ sốt Siro"};

});