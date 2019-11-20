import bbCodeParser from 'js-bbcode-parser';

bbCodeParser.setCodes({
  '\\[i\\]': '<i>',
  '\\[/i\\]': '</i>',
});

export { bbCodeParser };
