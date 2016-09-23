
{ Vector3 } = require 'three'


class Boid
    constructor: ->
        @vector = new Vector3
        @acceleration = new Vector3
        @width = 500
        @height = 500
        @depth = 200
        @neighborhoodRadius = 100
        @goal = null
        @maxSpeed = 4
        @maxSteerForce = 0.1
        @avoidWalls = false
        @position = new Vector3
        @velocity = new Vector3

    setAvoidWalls: (@avoidWalls) ->
    setWorldSize: (@width, @height, @depth) ->

    run: (boids) ->
        if @avoidWalls
            @vector.set -@width, @position.y, @position.z
            @vector = this.avoid @vector
            @vector.multiplyScalar 5
            @acceleration.add @vector
            @vector.set @width, @position.y, @position.z
            @vector = @avoid @vector
            @vector.multiplyScalar 5
            @acceleration.add @vector
            @vector.set @position.x, -@height, @position.z
            @vector = @avoid @vector
            @vector.multiplyScalar 5
            @acceleration.add @vector
            @vector.set @position.x, @height, @position.z
            @vector = this.avoid @vector
            @vector.multiplyScalar 5
            @acceleration.add @vector
            @vector.set @position.x, @position.y, -@depth
            @vector = @avoid @vector
            @vector.multiplyScalar 5
            @acceleration.add @vector
            @vector.set @position.x, @position.y, @depth
            @vector = @avoid @vector
            @vector.multiplyScalar 5
            @acceleration.add @vector
        if Math.random() > 0.5
            @flock boids
        @move()

    flock: (boids) ->
        if @goal
            @acceleration.add @reach(@goal, 0.005)
        @acceleration.add @alignment(boids)
        @acceleration.add @cohesion(boids)
        @acceleration.add @separation(boids)

    move: ->
        @velocity.add @acceleration
        l = @velocity.length()
        if l > @maxSpeed
            @velocity.divideScalar l / @maxSpeed
        @position.add @velocity
        @acceleration.set 0, 0, 0

    checkBounds: ->
        if @position.x >  @width  then @position.x = -@width
        if @position.x < -@width  then @position.x =  @width
        if @position.y >  @height then @position.y = -@height
        if @position.y < -@height then @position.y =  @height
        if @position.z >  @depth  then @position.z = -@depth
        if @position.z < -@depth  then @position.z =  @depth

    avoid: (target) ->
        steer = new Vector3
        steer.copy @position
        steer.sub target
        steer.multiplyScalar 1 / @position.distanceToSquared(target)
        steer;
        
    repulse: (target) ->
        distance = @position.distanceTo target
        if distance < 150
            steer = new Vector3
            steer.subVectors @position, target
            steer.multiplyScalar 0.5 / distance
            @acceleration.add steer

    reach: (target, amount) ->
        steer = new Vector3
        steer.subVectors target, @position
        steer.multiplyScalar amount
        steer

    alignment: (boids) ->
        velSum = new Vector3
        count = 0
        boids.forEach (boid) =>
            if Math.random() <= 0.6
                distance = boid.position.distanceTo @position
                if distance > 0 && distance <= @neighborhoodRadius
                    velSum.add boid.velocity
                    count++
        if count > 0
            velSum.divideScalar count
            l = velSum.length()
            if l > @maxSteerForce
                velSum.divideScalar l / @maxSteerForce
        velSum

    cohesion: (boids) ->
        posSum = new Vector3
        steer = new Vector3
        count = 0
        boids.forEach (boid) =>
            if Math.random() <= 0.6
                distance = boid.position.distanceTo @position
                if distance > 0 && distance <= @neighborhoodRadius
                    posSum.add boid.position
                    count++
        if count > 0
            posSum.divideScalar count
        steer.subVectors posSum, @position
        l = steer.length()
        if l > @maxSteerForce
            steer.divideScalar l / @maxSteerForce
        steer

    separation: (boids) ->
        posSum = new Vector3
        repulse = new Vector3
        boids.forEach (boid) =>
            if Math.random() <= 0.6
                distance = boid.position.distanceTo @position
                if distance > 0 && distance <= @neighborhoodRadius
                    repulse.subVectors @position, boid.position
                    repulse.normalize()
                    repulse.divideScalar distance
                    posSum.add repulse
        posSum


module.exports = Boid;