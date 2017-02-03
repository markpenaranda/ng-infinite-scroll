## AngularJS Infinite Scroll

###### Simple infinite scroll for AngularJs inspired by https://github.com/orizens/angular2-infinite-scroll


#### Usage

Implement the ngInfiniteScroll directive in the list container

	<div infinite-scroll onScroll="paginate" >
		<ul ng-repeat="item in items">
			<li>{{ item }}</li>
		</ul>
	</div>

Indicate the paginate function in the onScroll parameter.