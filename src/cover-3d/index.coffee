{ Cover3D } = require './Cover3D'

window.addEventListener 'load', ->
    cover3d = new Cover3D '#cover-3d'
    cover3d.render()