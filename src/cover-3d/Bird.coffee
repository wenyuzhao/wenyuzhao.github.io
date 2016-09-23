
{ Vector3 } = require 'three'

class Bird extends THREE.Geometry
    constructor: ->
        super()

        @v   5,  0,  0
        @v  -5, -2,  1
        @v  -5,  0,  0
        @v  -5, -2, -1
        @v   0,  2, -6
        @v   0,  2,  6
        @v   2,  0,  0
        @v  -3,  0,  0
        @f3  0,  2,  1
        @f3  4,  7,  6
        @f3  5,  6,  7
        
        @computeFaceNormals()

    v: (x, y, z) ->
        @vertices.push new THREE.Vector3(x, y, z)
    f3: (a, b, c) ->
        @faces.push new THREE.Face3(a, b, c)


module.exports = Bird