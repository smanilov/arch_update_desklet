const Cairo = imports.cairo;
const Clutter = imports.gi.Clutter;
const Desklet = imports.ui.desklet;
const Mainloop = imports.mainloop;
const Settings = imports.ui.settings;
const St = imports.gi.St;

function ArchUpdateDesklet(metadata, desklet_id){
  this._init(metadata, desklet_id);
}

function main(metadata, desklet_id) {
  return new ArchUpdateDesklet(metadata, desklet_id);
}

ArchUpdateDesklet.prototype = {
  __proto__: Desklet.Desklet.prototype,

  _init: function(metadata, desklet_id) {
    Desklet.Desklet.prototype._init.call(this, metadata);

    this.settings = new Settings.DeskletSettings(this, this.metadata["uuid"], desklet_id);

    this.setupUI();
  },

  setupUI: function() {
    // create and set root element
    this.root_actor = new Clutter.Actor();
    this.root_actor.set_size(640, 640);
    this.root_actor.remove_all_children();

    /*
    this.some_label = new St.Label({style_class: "some_label"});
    this.some_label.set_position(null, 100);
    this.some_label.set_text("hello");
    this.root_actor.add_actor(this.some_label);
    */

    this.setContent(this.root_actor);
  },

  on_setting_changed: function() {
  },

  on_desklet_clicked: function() {
  },

  on_desklet_removed: function() {
  }
};
