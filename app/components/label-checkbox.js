import Ember from 'ember';

export default Ember.Component.extend({
  value: undefined,
  label: undefined,
  checked: undefined,
  name: undefined,
  selection: undefined,

  _suspendValueChange: false,

  selectedChanged: function() {
    var selection = this.get('selection');
    if (!selection) {
      return;
    }
    var value = this.get('value');
    this.set('_suspendValueChange', true);

    if (this.get('checked')) {
      selection.pushObject(value);
    }
    else {
      selection.removeObject(value);
    }
    this.set('_suspendValueChange', false);
  }.observes('checked'),

  updateSelection: function() {
    var selection = this.get('selection');
    if (selection) {
      var value = this.get('value');
      this.set('checked', selection.contains(value));
    }
  },

  didInsertElement: function() {
    this.updateSelection();
  },

  valueChanged: function() {
    if (!this.get('_suspendValueChange')) {
      this.updateSelection();
    }
  }.observes("selection.@each")
});