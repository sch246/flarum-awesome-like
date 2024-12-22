import app from 'flarum/admin/app';

app.initializers.add('sch246/flarum-awesome-like', () => {
  // console.log('[sch246/flarum-awesome-like] Hello, admin!');

  
  app.extensionData
    .for('sch246-awesome-like')
    .registerSetting(
      {
        setting: 'sch246-awesome-like.like',
        label: app.translator.trans('sch246-awesome-like.admin.like_label'),
        type: 'select',
        options: {
          'off': app.translator.trans('sch246-awesome-like.admin.off'),
          'on': app.translator.trans('sch246-awesome-like.admin.on'),
          'only': app.translator.trans('sch246-awesome-like.admin.only'),
        },
        default: 'only',
      }
    )
    .registerSetting(
      {
        setting: 'sch246-awesome-like.reply',
        label: app.translator.trans('sch246-awesome-like.admin.reply_label'),
        type: 'select',
        options: {
          'off': app.translator.trans('sch246-awesome-like.admin.off'),
          'on': app.translator.trans('sch246-awesome-like.admin.on'),
          'only': app.translator.trans('sch246-awesome-like.admin.only'),
        },
        default: 'only',
      }
    )
});
