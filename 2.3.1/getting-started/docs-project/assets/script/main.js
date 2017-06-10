(function () {

  var embedfsTemplate = '<iframe style="height: 460px; width: 92%; margin-left: 4%; margin-right: 4%; border: none;display: none"></iframe>';
  var loaderSvg = '<svg width="96px" height="96px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-squaricle" style="">'+
        '<g transform="translate(50 50)">'+
        '<g transform="scale(0.799546 0.799546)">'+
        '<animateTransform attributeName="transform" type="scale" calcMode="spline" values="0.8;0.5;0.8" keyTimes="0;0.5;1" dur="1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animateTransform>'+
        '<rect x="-45" y="-45" width="90" height="90" ng-attr-fill="{{config.fill}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-width="{{config.width}}" fill="#ffffff" stroke="rgba(94.45161290322581%,38.268549828205686%,3.3598265368228795%,0.986)" stroke-width="5" transform="rotate(539.592)" rx="1.66668">'+
        '<animate attributeName="rx" calcMode="linear" values="0;50;0" keyTimes="0;0.5;1" dur="1" begin="0s" repeatCount="indefinite"></animate>'+
        '<animate attributeName="stroke-width" calcMode="linear" values="5;15;5" keyTimes="0;0.5;1" dur="1" begin="0s" repeatCount="indefinite"></animate>'+
        '<animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 0 0;270 0 0;540 0 0" keyTimes="0;0.5;1" dur="1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animateTransform>'+
        '</rect>'+
        '</g>'+
        '</g>'+
        '</svg>';

  $("embedfs").each(function(){

      var element = $(this);
      var p = config.fsRaw+$(element).attr("res");
      var d = $(element).attr("download-url");

      var src = config.embedfsPath+"/view?p="+p;
      if(typeof d != "undefined"){
          src = src + "&d="+d;
      }

      var  embedfsElement = this;
      var iframe = $(embedfsTemplate);
      $(iframe).prop('src',src);
      $(iframe).load(function(){

          $(embedfsElement).find("svg").fadeOut(function(){
              $(this).remove();
              $(iframe).fadeIn();
          });

      });

      $(this).html(loaderSvg);
      $(this).append(iframe);
  });

    var description = $("description");
    if(description.length>0){
        //Apply topic description
        $("#topic-description").html(description.html());
        $(description).remove();

    }

    var infoBlockHTML =
        '<div class="api  new-api-box">'+
        '   <div class="api-heading">'+
        '       <h4 title="" class="title-api selflink">'+
                    '<a href="#" class="link primary">this.callView()</a>'+
                '</h4>'+
            '</div>'+
            '<div class="api-body">'+
        '       <div class="desc">'+
                    '<p>Defines functions that can be invoked over the network by clients.</p>'+
                '</div>'+
            '</div>'+
        '</div>';

    //Transform info blocks;
    $("info-block").each(function(){

        var element = $(infoBlockHTML);
        $(element).find(".primary").html($(this).attr("title"));
        $(element).find(".desc").html($(this).html());
        $(this).replaceWith(element);

    });


    hljs.initHighlightingOnLoad(); //Apply syntax highlight

  var setHeaderId = function(element){
      element.id = element.innerHTML.trim().split(" ").join("-").split(".").join("-").split("/").join("-").toLowerCase();
  };

  var setIdsOnHeaders = function(list){

      for (var i = 0; i < list.length; i++) {
          var item = list[i];
          setHeaderId(item);
      }

  };


  var MAX_HEADER_DEPTH = 3
  var scrolling = false
  var scrollTimeout
  var activeLink = document.querySelector('.sidebar-link.current')
  var allLinks = []

  // create sub links for h2s
  var h2s = document.querySelectorAll('h2');
  setIdsOnHeaders(h2s);




  // find all h3s and nest them under their h2s
  var h3s = document.querySelectorAll('h3');
  setIdsOnHeaders(h3s);

  var isAfter = function(e1, e2) {
    return e1.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_FOLLOWING;
  }

  var h2sWithH3s = [];
  var j = 0;
  for (var i = 0; i < h2s.length; i++) {
    var h2 = h2s[i];
    var nextH2 = h2s[i+1];
    var ourH3s = [];
    while (h3s[j] && isAfter(h2, h3s[j]) && (!nextH2 || !isAfter(nextH2, h3s[j]))) {
      ourH3s.push({ header: h3s[j] });
      j++;
    }

    h2sWithH3s.push({
      header: h2,
      subHeaders: ourH3s
    });
  }

  if (h2sWithH3s.length) {
    createSubMenu(activeLink.parentNode, h2sWithH3s)
    smoothScroll.init({
      speed: 400,
      callback: function () {
        scrolling = false
      }
    })
  }

  function createSubMenu (container, headers) {
    var subMenu = document.createElement('ul')
    subMenu.className = 'sub-menu'
    container.appendChild(subMenu)
    Array.prototype.forEach.call(headers, function (h) {
      var link = createSubMenuLink(h.header)
      subMenu.appendChild(link)
      if (h.subHeaders) {
        createSubMenu(link, h.subHeaders)
      }
      makeHeaderLinkable(h.header)
    })
  }

  function createSubMenuLink (h) {
    allLinks.push(h)
    var headerLink = document.createElement('li')
    headerLink.innerHTML =
      '<a href="#' + h.id + '" data-scroll class="' + h.tagName + '"><span>' + (h.title || h.textContent) + '</span></a>'
    headerLink.firstChild.addEventListener('click', onLinkClick)
    return headerLink
  }

  function makeHeaderLinkable (h) {
    var anchor = document.createElement('a')
    anchor.className = 'anchor'
    anchor.href = '#' + h.id
    anchor.setAttribute('aria-hidden', true)
    anchor.setAttribute('data-scroll', '')
    anchor.innerHTML = '<span class="icon-link"></span>'
    anchor.addEventListener('click', onLinkClick)
    h.insertBefore(anchor, h.firstChild)

    var anchorOffset = document.createElement('div')
    anchorOffset.id = h.id
    anchorOffset.className = 'anchor-offset'
    h.insertBefore(anchorOffset, h.firstChild)

    h.removeAttribute("id");
  }

  function onLinkClick (e) {
    if (document.querySelector('.sub-menu').contains(e.target)) {
      setActive(e.target)
    }
    scrolling = true
    document.body.classList.remove('sidebar-open')
  }

  // setup active h3 update
  window.addEventListener('scroll', updateSidebar)
  window.addEventListener('resize', updateSidebar)

  function updateSidebar () {
    if (scrolling) return
    var doc = document.documentElement
    var top = doc && doc.scrollTop || document.body.scrollTop
    var last
    for (var i = 0; i < allLinks.length; i++) {
      var link = allLinks[i]
      if (link.offsetTop - 120 > top) {
        if (!last) last = link
        break
      } else {
        last = link
      }
    }
    if (last) {
      setActive(last)
    }
  }

  function setActive (link) {
    var previousActive = document.querySelector('.sub-menu .active')

    var hash = link.hash;
    if (!hash) {
      if (link.parentNode.tagName === 'A') {
        hash = link.parentNode.hash
      } else {
        hash = link.getElementsByTagName('a')[0].hash;
      }
    }
    var id = hash.slice(1);
    var currentActive = document.querySelector('.sub-menu a[href="#' + id + '"]')
    if (currentActive !== previousActive) {
      if (previousActive) previousActive.classList.remove('active')
      currentActive.classList.add('active')
    }
  }


  // scroll sidebar page link into view on page load (except for the top link)
  var atRoot = location.pathname === '/' || location.pathname === '/index.html';
  if (!atRoot || location.hash !== '') {
    // hexo rewrites the URLs to be relative, so the current page has href="".
    document.querySelector('.item-toc a[href=""]').scrollIntoView();
  }

  // version select
  var currentVersion = location.pathname.match(/^\/(v\d[^\/]+)/)
  ;[].forEach.call(document.querySelectorAll('.version-select'), function (select) {
    if (currentVersion) {
      [].some.call(select.options, function (o) {
        if (o.value === currentVersion[1]) {
          o.selected = true
          return true
        }
      })
    }
    select.addEventListener('change', function () {
      var targetPath = '/'
      if (select.selectedIndex !== 0) {
        targetPath = '/' + select.value + '/'
      }
      location.assign(targetPath)
    })
  })

  // fastclick to remove click delay in mobile browsers
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }

  // mobile
  document.querySelector('.js-sidebar-toggle')
    .addEventListener('click', function () {
      document.body.classList.toggle('sidebar-visible')
    });

  document.querySelector('.content')
    .addEventListener('click', function() {
      document.body.classList.remove('sidebar-visible')
    })
})()
