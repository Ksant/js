"use strict";



try {
    console.log(a);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log('finally');
}