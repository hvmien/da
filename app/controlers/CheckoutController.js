var ungdungAngularjs = angular.module("ungdungAngularJS", []);

ungdungAngularjs.controller("cartController",function($scope){
    $scope.listsanpham = [{
    id:1,
    ten:"Vé Buffer ngày 30/6/2016",
    gia:150000,
    img : "tick1.png",
    soluong : 2,},
   {
    id:2,
    ten:"Vé Buffer ngày 1/7/2016",
    gia:120000,
    img : "tick2.jpg",
    soluong : 1,},
    {
    id:3,
    ten:"Vé Buffer ngày 2/7/2016",
    gia:130000,
    img : "tick3.jpg",
    soluong : 1,}];
$scope.editedItem = {};

    Array.prototype.removeValue = function(name, value){
           var array = $.map(this, function(v,i){
              return v[name] === value ? null : v;
           });
           this.length = 0; //clear original array
           this.push.apply(this, array); //push all elements except the one we want to delete
        }
    $scope.xoaSP = function(vkey)
    {
        $scope.listsanpham.removeValue('id',vkey);
    }
    $scope.tongtien = function()
    {
        var tongtienS=0;
        var x;
        var lsp;
        lsp = $scope.listsanpham;
        for (x in lsp)
        {
            if(lsp[x].gia!==undefined && lsp[x].soluong!== undefined)
            tongtienS += lsp[x].gia * lsp[x].soluong;
        }
        return tongtienS;
    }
}); 