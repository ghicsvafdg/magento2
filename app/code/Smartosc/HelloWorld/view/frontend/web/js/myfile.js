require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal',
        // 'Magento_Ui/js/modal/alert'
    ],
    function(
        $,
        modal,
        // alert
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
            // alert({
            //     title: 'Alert Title',
            //     content: $('.alert-modal-content'),
            //     modalClass: 'alert',
            //     actions: {
            //         always: function() {
            //             // do something when the modal is closed
            //         }
            //     },
            //     buttons: [{
            //         text: $.mage.__('Accept'),
            //         class: 'action primary accept',
            //
            //         /**
            //          * Click handler.
            //          */
            //         click: function () {
            //             this.closeModal(true);
            //         }
            //     }, {
            //         text: $.mage.__('New Action'),
            //         class: 'action',
            //
            //         /**
            //          * Click handler.
            //          */
            //         click: function () {
            //             // New action
            //         }
            //     }]
            // });
        }

        var code = 'tungnt6';
        if (code.length === 7) {
            alert('123');
        } else {
            alert('tungnt6 not found');
        }
    }
);

