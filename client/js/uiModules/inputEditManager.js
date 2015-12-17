
function addEdit(node, fc) {
   var div = domOpts.createElement('div', null, 'inputEditManager-button edit octicon octicon-pencil');
    div.addEventListener('click', function () {
        node.classList.add('c-edit');
        fc();
    });
    div.setAttribute('title', 'edit');
    node.appendChild(div);
}
function addCancel(node, fc) {
    var div = domOpts.createElement('div', null, 'inputEditManager-button cancel octicon octicon-x');
    div.addEventListener('click', function () {
        node.classList.remove('c-edit');
        fc();
    });
    div.setAttribute('title', 'cancel');
    node.appendChild(div);
}

function addSave(node, fc) {
    var div = domOpts.createElement('div', null, 'inputEditManager-button save octicon octicon-check');
    div.addEventListener('click', function () {
        fc();
    });
    div.setAttribute('title', 'save changes');
    node.appendChild(div);
}

function addDelete(node, fc) {
    var div = domOpts.createElement('div', null, 'inputEditManager-button delete octicon octicon-trashcan');
    div.addEventListener('click', function () {
        fc();
    });
    div.setAttribute('title', 'remove this key');
    node.appendChild(div);
}

module.exports = {
    addEditorPanel : function (keyNode, listeners) {
        var containerNode = domOpts.createElement('div', null, 'inputEditManager wrap');

        if (listeners.hasOwnProperty('onEdit')) {
            addEdit(containerNode, listeners.onEdit);
        }
        if (listeners.hasOwnProperty('onCancel')) {
            addCancel(containerNode, listeners.onCancel);
        }
        if (listeners.hasOwnProperty('onDelete')) {
            addDelete(containerNode, listeners.onDelete);
        }
        if (listeners.hasOwnProperty('onSave')) {
            addSave(containerNode, listeners.onSave);
        }

        containerNode.domAppendTo(keyNode);
    },
    removePanel : function (node) {
        node.querySelector('.inputEditManager.wrap').domRemove();
    }
}