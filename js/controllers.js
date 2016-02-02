var cpControllers = angular.module('cpControllers', []);

cpControllers.controller('Home', ['$scope',
	function($scope) {
	    $(".home-link").click(function(event) {
	        scroll(0,0);
	        $(".navbar-collapse").collapse('hide');
		});
	}]);

cpControllers.controller('About', ['$scope',
	function($scope) {
		$(".about-container").fadeIn(1000);
	}]);

cpControllers.controller('Contact', ['$scope',
	function($scope) {
		$(".contact-container").fadeIn(1000);
	}]);

cpControllers.controller('GalleryList', ['$scope', 'Categories',
	function($scope, Categories) {
		$scope.categories = Categories.query();
	}]);

cpControllers.controller('Paintings', ['$scope', '$routeParams', 'Paintings',
	function($scope, $routeParams, Paintings) {
		$scope.paintings = Paintings.get({category: $routeParams.category});
	}]);

cpControllers.controller('PaintingDetail', ['$scope', '$routeParams', '$http', 
	'$filter', 'Painting', 
	function($scope, $routeParams, $http, $filter, Painting) {

	var p =	{
		   "paintings" : [
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "great-bend",
		         "location" : "Zion National Park, Utah",
		         "medium" : "canvas",
		         "notes" : "Study of unknown artist",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "The Great Bend"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "garden-tree",
		         "location" : "Como Park, Minnesota",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "oil",
		         "size" : "16x20",
		         "sold" : true,
		         "title" : "Como Lake Japanese Garden"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "autumn-reflection",
		         "location" : "Minnesota",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 250,
		         "size" : "11x14",
		         "title" : "Autumn Reflection"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "farm-clouds",
		         "location" : "Minnesota",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 250,
		         "size" : "16x20",
		         "title" : "Minnesota Farm in Storm"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "el-cap",
		         "location" : "Yosemite National Park, California",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "El Capitan"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "guye",
		         "location" : "Alpine Lakes Wilderness, Washington",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 350,
		         "size" : "16x20",
		         "title" : "View from Guye Peak"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "monkey-face",
		         "location" : "Smith Rock State Park, Oregon",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "View from Monkey Face"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "latourell",
		         "location" : "Columbia River Gorge, Oregon",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Latourell Falls"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "birth",
		         "location" : "Joshua Tree National Park, California",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 350,
		         "size" : "20x16",
		         "title" : "Birth"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "granite-mtn",
		         "location" : "Alpine Lakes Wilderness, Washington",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "View from Granite Mountain"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "sperry",
		         "location" : "Glacier National Park, Montana",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "24x36",
		         "title" : "Sperry Glacier"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "big-sur",
		         "location" : "Pacific Coast, California",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Rocky Point Above Big Sur"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "dead-trees",
		         "location" : "Yosemite National Park, California",
		         "medium" : "canvas",
		         "notes" : "Sky inspired by \"Summer Storm\" by Franklin Carmichael",
		         "paint" : "oil",
		         "price" : 350,
		         "size" : "20x16",
		         "title" : "Dead Trees"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "cypress",
		         "location" : "Pacific Coast, USA",
		         "medium" : "canvas",
		         "notes" : "Sky inspired by Birger Sandsen",
		         "paint" : "oil",
		         "price" : 350,
		         "size" : "18x20",
		         "title" : "Cypress Fantasy"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "blue-ridge",
		         "location" : "Blue Ridge Mountains National Parkway, North Carolina",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 350,
		         "size" : "20x16",
		         "title" : "Blue Ridge Mountains"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "coast-cedar",
		         "location" : "Pacific Coast, California",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 250,
		         "size" : "11x14",
		         "title" : "California Coast Cedar Tree"
		      },
		      {
		         "category" : "Mountain Landscapes - USA",
		         "filename" : "grand-canyon",
		         "location" : "Grand Canyon National Park, Arizona",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Grand Canyon"
		      },
		      {
		         "category" : "Mountain Landscapes - Canada",
		         "filename" : "ohara",
		         "location" : "Yoho National Park, British Columbia",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 400,
		         "size" : "16x20",
		         "title" : "Lake O'Hara"
		      },
		      {
		         "category" : "Mountain Landscapes - Canada",
		         "filename" : "valhalla-mtns",
		         "location" : "Valhalla Provincial Park, British Columbia",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "size" : "16x20",
		         "sold" : true,
		         "title" : "Valhalla Mountain Range"
		      },
		      {
		         "category" : "Mountain Landscapes - Canada",
		         "filename" : "mtn-lake",
		         "location" : "Valhalla Provincial Park, British Columbia",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "size" : "16x20",
		         "sold" : true,
		         "title" : "Valhalla Mountain Lake"
		      },
		      {
		         "category" : "Mountain Landscapes - Canada",
		         "filename" : "montmorency",
		         "location" : "Quebec City, Quebec",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 250,
		         "size" : "10x14",
		         "title" : "Montmorency Falls"
		      },
		      {
		         "category" : "City and Country Landscapes",
		         "filename" : "bodie",
		         "location" : "Bodie Ghost Town State Park, California",
		         "medium" : "canvas",
		         "notes" : "Already framed, price includes frame.",
		         "paint" : "oil",
		         "price" : 700,
		         "size" : "18x24",
		         "title" : "Bodie Ghost Town"
		      },
		      {
		         "category" : "City and Country Landscapes",
		         "filename" : "savannah",
		         "location" : "Savannah, Georgia",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Street Scene"
		      },
		      {
		         "category" : "City and Country Landscapes",
		         "filename" : "mabry",
		         "location" : "Blue Ridge Mountains, Virginia",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 300,
		         "size" : "20x16",
		         "title" : "Mabry Mill"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "sandzen-fjord",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Birger Sandzen Study",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "In Stravanger Fjord"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "sandzen-four-trees",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Birger Sandzen Study",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "16x20",
		         "title" : "Landscape with Four Trees"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "sandzen-creek",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Birger Sandzen Study",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Creek at Moonrise"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "mafutu-deer",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Ma Fu-t'u Study (China 1670)",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Deer by Stormy Sea"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "thomson-october",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Tom Thomson Study",
		         "paint" : "oil",
		         "price" : 300,
		         "size" : "11x14",
		         "title" : "Algonquin October"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "thomson-hot-summer",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Tom Thomson Study",
		         "paint" : "oil",
		         "price" : 350,
		         "size" : "16x20",
		         "title" : "Hot Summer Moonlight"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "johnston-cowboy",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Franz Johnston Study",
		         "paint" : "oil",
		         "price" : 400,
		         "size" : "16x20",
		         "title" : "Cowboy Camp, Sundown, Lake Louise, Alberta"
		      },
		      {
		         "category" : "Studies of Work by Other Artists",
		         "filename" : "harris-early",
		         "location" : "",
		         "medium" : "canvas panel",
		         "notes" : "Sam Hyde Harris Study",
		         "paint" : "oil",
		         "price" : 250,
		         "size" : "14x11",
		         "title" : "Early Palm Springs"
		      },
		      {
		         "category" : "Flowers",
		         "filename" : "swami",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 400,
		         "size" : "16x20",
		         "title" : "Swami (Day Lily)"
		      },
		      {
		         "category" : "Flowers",
		         "filename" : "magnolia",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "Already framed, price includes frame.",
		         "paint" : "oil",
		         "price" : 450,
		         "size" : "16x20",
		         "title" : "Savannah Magnolia"
		      },
		      {
		         "category" : "Flowers",
		         "filename" : "lilies",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Still Life with Day Lilies"
		      },
		      {
		         "category" : "Flowers",
		         "filename" : "red-lilies",
		         "location" : "",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 350,
		         "size" : "16x20",
		         "title" : "Red Day Lilies"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "forest-creek",
		         "location" : "Minnesota",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 400,
		         "size" : "20x16",
		         "title" : "Forest Scene with Creek"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "st-paul",
		         "location" : "St. Paul, Minnesota",
		         "medium" : "canvas",
		         "notes" : "Trees and rocks inspired by \"Bright Land\" by Arthur Lismer",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Saint Paul in the Jungle"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "willow",
		         "location" : "Central Park, Roseville, Minnesota",
		         "medium" : "canvas",
		         "notes" : "Already framed, price includes frame.",
		         "paint" : "oil",
		         "price" : 700,
		         "size" : "18x24",
		         "title" : "Yellow Weeping Willow"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "birch",
		         "location" : "Minnesota",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 400,
		         "size" : "18x24",
		         "title" : "Fall Birch Forest"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "japanese",
		         "location" : "Minnesota Arboritum",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 400,
		         "size" : "16x20",
		         "title" : "Japanese Garden"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "cornfield",
		         "location" : "Stillwater, Minnesota",
		         "medium" : "canvas",
		         "notes" : "Already framed, price includes frame.",
		         "paint" : "oil",
		         "price" : 700,
		         "size" : "18x24",
		         "title" : "Cornfield at Sunset"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "house",
		         "location" : "Minneapolis, Minnesota",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "size" : "18x24",
		         "sold" : true,
		         "title" : "House Across the Street"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "geese",
		         "location" : "Sucker Lake, Roseville, Minnesota",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 250,
		         "size" : "11x14",
		         "title" : "Canadian Geese"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "hill-field",
		         "location" : "Minnesota",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 300,
		         "size" : "14x18",
		         "title" : "Hills and Fields from the Road"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "mn-storm",
		         "location" : "Minnesota",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "acrylic",
		         "price" : 350,
		         "size" : "20x16",
		         "title" : "Minnesota Landscape with Storm"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "mn-farm",
		         "location" : "Minnesota",
		         "medium" : "canvas panel",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 300,
		         "size" : "11x14",
		         "title" : "Minnesota Farm"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "millacs",
		         "location" : "Lake Mille Lacs, Minnesota",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 350,
		         "size" : "12x24",
		         "title" : "Autumn on Lake Mille Lacs"
		      },
		      {
		         "category" : "Minnesota",
		         "filename" : "mn-fantasy",
		         "location" : "Minnesota",
		         "medium" : "canvas",
		         "notes" : "Already framed, price includes frame.",
		         "paint" : "acrylic",
		         "price" : 500,
		         "size" : "20x16",
		         "title" : "Minnesota Landscape Fantasy"
		      },
		      {
		         "category" : "Europe",
		         "filename" : "beynac",
		         "location" : "Beynac, Dordogne River, France",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Beynac"
		      },
		      {
		         "category" : "Europe",
		         "filename" : "beynac-village",
		         "location" : "Beynac, Dordogne River, France",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "oil",
		         "price" : 500,
		         "size" : "18x24",
		         "title" : "Beynac Village"
		      },
		      {
		         "category" : "Europe",
		         "filename" : "como",
		         "location" : "Lake Como, Italy",
		         "medium" : "canvas",
		         "notes" : "",
		         "paint" : "acrylic",
		         "size" : "11x14",
		         "sold" : true,
		         "title" : "Lake Como"
		      }
		   ]
		}

		$scope.painting = $filter('filter')(p.paintings, {filename: $routeParams.painting})[0];

		if ($scope.painting.notes != "") {
			$scope.notes = true
		} else {
			$scope.notes = false
		}
		if ($scope.painting.location != "") {
			$scope.location = true
		} else {
			$scope.location = false
		}
	}]);

	