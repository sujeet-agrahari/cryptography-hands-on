Counting in binary is so simple because you only have to know how to count to 1!

Think of a car's "odometer", except that unlike a traditional odometer each digit can only count up to 1 from 0. When the car is fresh from the factory the odometer reads "00000000".

When you've driven your first mile the odometer reads "00000001". So far, so good.

When you've driven your second mile the first digit of the odometer rolls back over to "0" (since its maximum value is "1") and the second digit of the odometer rolls over to "1", making the odometer read "00000010". This looks like the number 10 in decimal notation, but it's actually 2 (the number of miles you've driven the car so far) in binary notation.

When you've driven the third mile the odometer reads "00000011", since the first digit of the odometer turns again. The number "11", in binary notation, is the same as the decimal number 3.

Finally, when you've driven your fourth mile both digits (which were reading "1" at the end of the third mile) roll back over to zero position, and the 3rd digit rolls up to the "1" position, giving us "00000100". That's the binary representation of the decimal number 4.

You can memorize all of that if you want, but you really only need to understand _how_ the little odometer "rolls over" as the number it's counting gets bigger. It's exactly the same as a traditional decimal odometer's operation, except that each digit can only be "0" or "1" on our fictional "binary odometer".

To convert a decimal number to binary you could roll the odometer forward, tick by tick, counting aloud until you've rolled it a number of times equal to the decimal number you want to convert to binary. Whatever is displayed on the odometer after all that counting and rolling would be the binary representation of the decimal number you counted up to.

Since you understand how the odometer rolls forward you'll also understand how it rolls backward, too. To convert a binary number displayed on the odometer back to decimal you could roll the odometer back one tick at a time, counting aloud until the odometer reads "00000000". When all that counting and rolling is done, the last number you say aloud would be the decimal representation of the binary number the odometer started with.

Converting values between binary and decimal this way would be _very_ tedious. You could do it, but it wouldn't be very efficient. It's easier to learn a little algorithm to do it faster.

A quick aside: Each digit in a binary number is known as a "bit". That's "b" from "binary" and "it" from "digit". A bit is a **b**nary dig**it**.

Converting a binary number like, say, "1101011" to decimal is a simple process with a handy little algorithm.

Start by counting the number of bits in the binary number. In this case, there are 7. Make 7 divisions on a sheet of paper (in your mind, in a text file, etc) and begin filling them in from right to left. In the rightmost slot, enter the number "1", because we'll always start with "1". In the next slot to the left enter double the value in the slot to the right (so, "2" in the next one, "4" in the next one) and continue until all the slots are full. (You'll end up memorizing these numbers, which are the powers of 2, as you do this more and more. I'm alright up to 131,072 in my head but I usually need a calculator or paper after that).

So, you should have the following on your paper in your little slots.

     64    |    32    |    16    |    8    |    4    |    2    |    1    |

Transcribe the bits from the binary number below the slots, like so:

     64    |    32    |    16    |    8    |    4    |    2    |    1    |
      1          1          0         1         0         1         1

Now, add some symbols and compute the answer to the problem:

     64    |    32    |    16    |    8    |    4    |    2    |    1    |
    x 1        x 1        x 0       x 1       x 0       x 1       x 1
    ---        ---        ---       ---       ---       ---       ---
           +          +          +         +         +         +         =

Doing all the math, you should come up with:

     64    |    32    |    16    |    8    |    4    |    2    |    1    |
    x 1        x 1        x 0       x 1       x 0       x 1       x 1
    ---        ---        ---       ---       ---       ---       ---
     64    +    32    +     0    +    8    +    0    +    2    +    1    =   107

That's got it. "1101011" in decimal is 107. It's just simple steps and easy math.

Converting decimal to binary is just as easy and is the same basic algorithm, run in reverse.

Say that we want to convert the number 218 to binary. Starting on the right of a sheet of paper, write the number "1". To the left, double that value (so, "2") and continue moving toward the left of the paper doubling the last value. If the number you are about to write is greater than the number being converted stop writing. otherwise, continue doubling the prior number and writing. (Converting a big number, like 34,157,216,092, to binary using this algorithm can be a bit tedious but it's certainly possible.)

So, you should have on your paper:

     128    |    64    |    32    |    16    |    8    |    4    |    2    |    1    |

You stopped writing numbers at 128 because doubling 128, which would give you 256, would be large than the number being converted (218).

Beginning from the leftmost number, write "218" above it (128) and ask yourself: "Is 218 larger than or equal to 128?" If the answer is yes, scratch a "1" below "128". Above "64", write the result of 218 minus 128 (90).

Looking at "64", ask yourself: "Is 90 larger than or equal to 64?" It is, so you'd write a "1" below "64", then subtract 64 from 90 and write that above "32" (26).

When you get to "32", though, you find that 32 is not greater than or equal to 26. In this case, write a "0" below "32", copy the number (26) from above 32" to above "16" and then continue asking yourself the same question with the rest of the numbers.

When you're all done, you should have:

     218         90         26         26        10         2         2         0
     128    |    64    |    32    |    16    |    8    |    4    |    2    |    1    |
       1          1          0          1         1         0         1         0

The numbers at the top are just notes used in computation and don't mean much to us. At the bottom, though, you see a binary number "11011010". Sure enough, 218, converted to binary, is "11011010".

Following these very simple procedures you can convert binary to decimal and back again w/o a calculator. The math is all very simple and the rules can be memorized with just a bit of practice.
