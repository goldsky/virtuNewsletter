VirtuNewsletter.window.BatchSubscribers = function (config) {
    config = config || {};

    var allCategories = [];
    if (config.record && config.record.allCategories) {
        for (var key in config.record.allCategories) {
            key = Number(key);
            if (config.record.allCategories.hasOwnProperty(key)) {
                allCategories.push({
                    xtype: 'xcheckbox',
                    boxLabel: config.record.allCategories[key],
                    name: 'categories['+key+']',
                    value: key
                });
            }
        }
    }

    Ext.applyIf(config, {
        url: VirtuNewsletter.config.connectorUrl,
        autoHeight: true,
        preventRender: true,
        labelAlign: 'left',
        fields: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        fieldLabel: _('virtunewsletter.categories'),
                        itemCls: 'x-check-group-alt',
                        items: allCategories
                    }
                ]
            }, {
                xtype: 'xcheckbox',
                fieldLabel: '',
                name: 'delete_categories',
                boxLabel: _('virtunewsletter.delete_categories')
            }, {
                xtype: 'textfield',
                fieldLabel: _('virtunewsletter.email_provider'),
                name: 'email_provider',
                anchor: '100%'
            }, {
                xtype: 'xcheckbox',
                fieldLabel: '',
                name: 'delete_email_provider',
                boxLabel: _('virtunewsletter.delete_email_provider')
            }, {
                xtype: 'radiogroup',
                fieldLabel:  _('virtunewsletter.active'),
                name: 'active',
                items: [
                    {boxLabel: _('virtunewsletter.keep'), name: 'active', inputValue: 0, checked: true},
                    {boxLabel: _('virtunewsletter.active'), name: 'active', inputValue: 1},
                    {boxLabel: _('virtunewsletter.inactive'), name: 'active', inputValue: 2}
                ]
            }
        ]
    });

    VirtuNewsletter.window.BatchSubscribers.superclass.constructor.call(this, config);
};
Ext.extend(VirtuNewsletter.window.BatchSubscribers, MODx.Window);
Ext.reg('virtunewsletter-window-batchsubscribers', VirtuNewsletter.window.BatchSubscribers);