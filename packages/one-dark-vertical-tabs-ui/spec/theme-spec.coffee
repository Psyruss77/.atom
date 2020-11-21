describe "One Dark UI theme", ->
  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage('one-dark-vertical-tabs-ui')

  it "allows the font size to be set via config", ->
    expect(document.documentElement.style.fontSize).toBe ''

    atom.config.set('one-dark-vertical-tabs-ui.fontSize', '10')
    expect(document.documentElement.style.fontSize).toBe '10px'

    atom.config.set('one-dark-vertical-tabs-ui.fontSize', 'Auto')
    expect(document.documentElement.style.fontSize).toBe ''

  it "allows the layout mode to be set via config", ->
    expect(document.documentElement.getAttribute('theme-one-dark-vertical-tabs-ui-layoutmode')).toBe 'auto'

    atom.config.set('one-dark-vertical-tabs-ui.layoutMode', 'Spacious')
    expect(document.documentElement.getAttribute('theme-one-dark-vertical-tabs-ui-layoutmode')).toBe 'spacious'

  it "allows the tab sizing to be set via config", ->
    expect(document.documentElement.getAttribute('theme-one-dark-vertical-tabs-ui-tabsizing')).toBe 'auto'

    atom.config.set('one-dark-vertical-tabs-ui.tabSizing', 'Minimum')
    expect(document.documentElement.getAttribute('theme-one-dark-vertical-tabs-ui-tabsizing')).toBe 'minimum'
