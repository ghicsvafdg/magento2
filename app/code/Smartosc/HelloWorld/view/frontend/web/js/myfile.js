require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal',
        'Magento_Ui/js/modal/alert'
    ],
    function(
        $,
        modal,
        alert
    ) {
        'use strict';
        var options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            buttons: [{
                text: $.mage.__('Continue'),
                class: 'mymodal1',
                click: function () {
                    this.closeModal();
                }
            }]
        };

        var popup = modal(options, $('#popup-modal'));
        $("#click-me").on('click',function(){
            $("#popup-modal").modal("openModal");
        });

        if (1 === 2) {
            console.log("test result");
        } else {
            alert({
                title: 'Alert Title',
                content: $('.alert-modal-content'),
                modalClass: 'alert',
            });
        }
    }
);

