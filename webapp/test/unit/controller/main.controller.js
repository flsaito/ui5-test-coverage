/*global QUnit*/

sap.ui.define([
	"ns/ui5-test-coverage/controller/main.controller"
], function (Controller) {
	"use strict";

	QUnit.module("main Controller");

	QUnit.test("I should test the main controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("Test match functions", function (assert) {
		assert.strictEqual("A", "A", "A matches A");
		assert.strictEqual("B", "B", "B matches B");
		assert.strictEqual("C", "C", "C matches C");
	});

	QUnit.test("Test match functions", function (assert) {
		assert.strictEqual("D", "D", "D matches D");
	});
	
});
