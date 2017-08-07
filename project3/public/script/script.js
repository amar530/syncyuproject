var app=angular.module("myApp",[]);
app.controller("controller",function($scope,$http) {
	$scope.startingPoint="Bangalore";
	$http({
		method:"GET",
		url:'value.json'
	}).then(function(response) {
		var datas=response.data.records;
		$scope.datas=response.data.records;
		$scope.minDistance=getSmallestDistance(datas);
		var minDistance=getSmallestDistance(datas);
		$scope.nearByCity=getNearestCity(datas,minDistance);
		$scope.nearestDistace=getDiffBetweenNearestCity(datas);
	});
});
// function to get smallest distance in json array
function getSmallestDistance(data) {	
	var smallestElement=data[0].distance;
		for(i=0;i<data.length;i++)
		{
			if(smallestElement>data[i].distance){
				smallestElement=data[i].distance;
			}
		}
		return smallestElement;
}
// function to get city name near to the home (Bangalore)
function getNearestCity(data,distance) {
	var nearestCity="";
	for(i=0;i<data.length;i++)
	{
		if(data[i].distance==distance)
		{
			nearestCity=data[i].cityname;
		}
	}
	return nearestCity;
}

function getDiffBetweenNearestCity(data)
{
		var fSmall=data[0].distance;
		var sSmall=data[1].distance;
		for (i=1; i<data.length; i++)
		{
			if (fSmall>data[i].distance)
			{
				sSmall=fSmall;
				fSmall=data[i].distance;
			}
			else if (sSmall>data[i].distance)
			{
				sSmall=data[i].distance;
			}
		}
		return (sSmall-fSmall);


}