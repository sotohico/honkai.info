'use strict';

var panelGroupRootID = 'panelGroupRoot';

function TimeTableModule() {
    this.panelParentDOM = null;
    this.panelMap = null;
    this.init();
}

TimeTableModule.prototype.init = function() {
    this.panelParentDOM = document.getElementById(panelGroupRootID);

    if ( this.panelParentDOM == null ) {
        this.panelParentDOM = document.createElement('div');
        this.panelParentDOM.classList.add('panel-group');
        this.panelParentDOM.setAttribute('id', panelGroupRootID);
        document.body.appendChild(this.panelParentDOM);
    }

    this.panelMap = new Object();
}

TimeTableModule.prototype.createPanel = function(key, panelTitleContents, imgSrc, footterConttents) {
    
    var panelRoot = document.createElement('div');
    panelRoot.setAttribute('id', key);
    panelRoot.classList.add('panel');
    panelRoot.classList.add('panel-warning');
    panelRoot.setAttribute('style','float:left;');

    var panelHeader = document.createElement('div');
    panelHeader.classList.add('panel-heading');
    panelHeader.classList.add('text-center');
    
    var panelHeaderLabel = document.createElement('p');
    panelHeaderLabel.classList.add('label');
    panelHeaderLabel.classList.add('label-primary');
    panelHeaderLabel.innerText = panelTitleContents;

    panelHeader.appendChild(panelHeaderLabel);

    var panelBody = document.createElement('div');
    panelBody.classList.add('panel-body');
    panelBody.setAttribute('style', 'position:relative; padding:0; border:0;');

    var panelImg = document.createElement('img');
    panelImg.setAttribute('src', imgSrc);
    panelImg.setAttribute('style', 'width:100%; height:50%; margin:0px; margin:0');

    var panelFooter = document.createElement('div');
    panelFooter.classList.add('panel-footer');
    panelFooter.classList.add('panel-warning');
    panelFooter.interText = footterConttents;

    panelRoot.appendChild(panelHeader);
    panelRoot.appendChild(panelBody);
    panelBody.appendChild(panelImg);
    panelRoot.appendChild(panelFooter);

    this.panelParentDOM.appendChild(panelRoot);
}

var timeTable = new TimeTableModule();