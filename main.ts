/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: March 2026
 * This program adds one point everytime "A" is clicked, when "B" is clicked the points reser
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
const cookies:number = 0
let cookieAmount:number = cookies

/* This code adds a point to total amount of "cookies" on button "A" press and displays 
* the number of points.
*/

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    cookieAmount = cookieAmount + 1
basic.showNumber(cookieAmount)
})

/* This code resets number of points on button "B" press and displays number of points, after 
* three seconds it will ruturn to happy face.
*/

input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    cookieAmount = 0
    basic.showNumber(cookieAmount)
    basic.pause(3000)
    basic.showIcon(IconNames.Happy)
})