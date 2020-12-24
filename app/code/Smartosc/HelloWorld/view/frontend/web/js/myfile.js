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
        alert({
            title: $.mage.__('Some title'),
            content: $.mage.__('Some content'),
            actions: {
                always: function(){}
            },
            buttons: [{
                text: $.mage.__('OK'),
                class: 'action-primary action-accept',
                click: function () {
                    this.closeModal(true);
                }
            }]
        });
    }
);

