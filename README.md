# ember-cli-label-checkbox

Plugin for ember-cli that makes label-checkbox component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-cli-label-checkbox.git --save-dev
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{{label-checkbox label="Click here" checked=valueToUpdate}}
```

You can also use the label-checkbox for lists:

```
{{#each options as |option|}}
  {{label-checkbox selection=collectionToUpdate value=option label='Click here'}}
{{/each}}
```

## Configuration

### label

The label for the checkbox.
The HTML follows Twitter Bootstrap 3 markup:

```
<input type='checkbox' />
<label>
  <span class="icon"></span>
  <span class="text">Label goes here</span>
</label>
```

### checked

The bound value to update, when the value is checked or not (boolean).

### selection

An array of the selected values. Checked items are pushed to the collection, and unchecked items are removed from the collection.