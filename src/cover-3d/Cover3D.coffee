THREE = require 'three'

OrbitControls = require './OrbitControls'

Boid = require './Boid'
Bird = require './Bird'

class Cover3D
    constructor: (container_selector) ->
        # container
        @container = document.querySelector container_selector
        # renderer
        @renderer = new THREE.WebGLRenderer
        @renderer.setPixelRatio window.devicePixelRatio
        @renderer.setSize @container.clientWidth, @container.clientHeight
        @container.appendChild @renderer.domElement
        # camera
        @camera = new THREE.PerspectiveCamera 75, @container.clientWidth / @container.clientHeight, 1, 1100
        @camera.position.z = 400
        # controls
        @initOrbitControls()
        # scene
        @scene = new THREE.Scene
        @initLights()
        @initSkyBox()
        @initCylinders(128)
        @initBirds(128)

    initOrbitControls: ->
        @controls = new OrbitControls @camera, @renderer.domElement
        @controls.enableDamping = true
        @controls.dampingFactor = 0.25
        @controls.enableZoom = false
        @controls.autoRotate = true
        @controls.autoRotateSpeed = 0.3
        window.addEventListener 'resize', @onWindowResize, false

    initLights: ->
        light = new THREE.DirectionalLight 0xffffff
        light.position.set 1, 1, 1
        @scene.add light
        light = new THREE.DirectionalLight 0x002288
        light.position.set -1, -1, -1
        @scene.add light
        light = new THREE.AmbientLight 0x222222
        @scene.add light

    initSkyBox: ->
        canvas = Object.assign document.createElement('canvas'), width: 128, height: 128
        Object.assign(canvas.getContext('2d'), fillStyle: 'rgb(200, 200, 200)').fillRect 0, 0, canvas.width, canvas.height
        texture = (path) ->
            tex = new THREE.Texture canvas
            Object.assign new Image, src: path, onload: -> Object.assign(tex, image: this, needsUpdate: true)
            new THREE.MeshBasicMaterial map: tex, overdraw: 0.5
        mesh = new THREE.Mesh new THREE.BoxGeometry(300, 300, 300, 7, 7, 7), new THREE.MultiMaterial [
            texture '/assets/textures/cube/skybox/px.jpg' # right
            texture '/assets/textures/cube/skybox/nx.jpg' # left
            texture '/assets/textures/cube/skybox/py.jpg' # top
            texture '/assets/textures/cube/skybox/ny.jpg' # bottom
            texture '/assets/textures/cube/skybox/pz.jpg' # back
            texture '/assets/textures/cube/skybox/nz.jpg' # front
        ]
        mesh.scale.x = -1
        for vertex in mesh.geometry.vertices
            vertex.normalize()
            vertex.multiplyScalar 550
        @scene.add mesh

    initCylinders: (count) ->
        geometry = new THREE.CylinderGeometry 0, 10, 30, 4, 1
        material =  new THREE.MeshPhongMaterial color: 0xffffff, shading: THREE.FlatShading
        new Array(count).fill().forEach =>
            mesh = new THREE.Mesh geometry, material
            mesh.position.x = (Math.random() - 0.5) * 1000
            mesh.position.y = (Math.random() - 0.5) * 1000
            mesh.position.z = (Math.random() - 0.5) * 1000
            mesh.updateMatrix()
            mesh.matrixAutoUpdate = false
            @scene.add mesh

    initBirds: (count) ->
        @birds = new Array(count).fill()
        @boids = new Array(count).fill()
        @birds.forEach (_, i) =>
            boid = @boids[i] = new Boid
            boid.position.x = Math.random() * 400 - 200
            boid.position.y = Math.random() * 400 - 200
            boid.position.z = Math.random() * 400 - 200
            boid.velocity.x = Math.random() * 2 - 1
            boid.velocity.y = Math.random() * 2 - 1
            boid.velocity.z = Math.random() * 2 - 1
            boid.setAvoidWalls true
            boid.setWorldSize 400, 400, 400
            bird = @birds[i] = new THREE.Mesh new Bird, new THREE.MeshBasicMaterial(color: Math.random() * 0xffffff, side: THREE.DoubleSide)
            bird.phase = Math.floor(Math.random() * 62.83)
            @scene.add bird
        @renderer.domElement.addEventListener 'mousemove', @onDocumentMouseMove, false

    render: =>
        requestAnimationFrame @render
        @boids?.forEach (boid, i) =>
            boid.run @boids
            bird = @birds[i]
            bird.position.copy @boids[i].position
            color = bird.material.color
            color.r = color.g = color.b = (500 - bird.position.z) / 1000
            bird.rotation.y = Math.atan2 -boid.velocity.z, boid.velocity.x
            bird.rotation.z = Math.asin boid.velocity.y / boid.velocity.length()
            bird.phase = (bird.phase + (Math.max(0, bird.rotation.z) + 0.1)) % 62.83
            bird.geometry.vertices[5].y = bird.geometry.vertices[4].y = Math.sin(bird.phase) * 5
        @controls.update()
        @renderer.render @scene, @camera

    onDocumentMouseMove: (event) =>
        vector = new THREE.Vector3 event.clientX - @container.clientWidth / 2, - event.clientY + @container.clientHeight / 2, 0
        @boids.forEach (boid) =>
            vector.z = boid.position.z;
            boid.repulse vector

    onWindowResize: =>
        @camera.aspect = @container.clientWidth / @container.clientHeight
        @camera.updateProjectionMatrix();
        @renderer.setSize @container.clientWidth, @container.clientHeight



exports.Cover3D = Cover3D