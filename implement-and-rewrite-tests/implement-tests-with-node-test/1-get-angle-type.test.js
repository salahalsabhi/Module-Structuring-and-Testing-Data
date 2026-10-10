import {getAngleType} from "../implement/1-get-angle-type.js";
import assert from "node:assert";
import test from "node:test";

test("corrctly get angle type", function(){
    assert.equal(getAngleType(75), "Acute angle");
});

test("corrctly get angle type", function(){
    assert.equal(getAngleType(90), "Right angle");
});

test("corrctly get angle type", function(){
    assert.equal(getAngleType(120), "Obtuse angle");
});

test("corrctly get angle type", function(){
    assert.equal(getAngleType(180), "Straight angle");
});

test("corrctly get angle type", function(){
    assert.equal(getAngleType(210), "Reflex angle");
});
 
test("corrctly get angle type", function(){
    assert.equal(getAngleType(400), "Invalid angle");
});

test("corrctly get angle type", function(){
    assert.equal(getAngleType(0), "Invalid angle");
});

test("corrctly get angle type", function(){
    assert.equal(getAngleType(360), "Invalid angle");
});

test("corrctly get angle type", function(){
    assert.equal(getAngleType(-70), "Invalid angle");
});

