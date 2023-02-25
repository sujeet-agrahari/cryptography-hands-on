const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  // modulusLength is the length of the modulus in bits, which is the product of two randomly chosen prime numbers
  modulusLength: 2048, // the length of the modulus in bits
  publicKeyEncoding: {
    type: 'spki', // the encoding type of the public key
    format: 'pem', // the output format of the public key
  },
  privateKeyEncoding: {
    type: 'pkcs8', // the encoding type of the private key
    format: 'pem', // the output format of the private key
  },
});

console.log('Public Key:\n', publicKey);
console.log('Private Key:\n', privateKey);

/**
 The type property is set to 'spki', which stands for "SubjectPublicKeyInfo", a specific encoding format for public keys defined by the X.509 standard. This format includes additional information about the key, such as its algorithm identifier and any associated parameters.
 The format property is set to 'pem', which stands for "Privacy Enhanced Mail". PEM is a base64-encoded format used for encoding cryptographic objects, such as keys and certificates, in a human-readable text format. In the case of the public key, it will be encoded as a PEM file with a .pem extension.
 */
/**
- step-by-step explanation of how RSA keys are generated:
1. Choose two large prime numbers, p and q. These primes should be of roughly equal size, and typically have hundreds or thousands of digits each.
2. Compute n = p * q. This is the RSA modulus, and is used in both the public and private keys.
3. Compute the totient of n, denoted phi(n), as phi(n) = (p - 1) * (q - 1).
4. Choose a small odd integer e that is relatively prime to phi(n), meaning that it has no common factors other than 1 with phi(n).
5. Compute d, the modular multiplicative inverse of e modulo phi(n). This means finding a number d such that (d * e) mod phi(n) = 1. This can be done using the extended Euclidean algorithm.
6. The public key consists of the modulus n and the exponent e.
7. The private key consists of the modulus n and the exponent d.
In the code you provided earlier, the Node.js crypto library handles these steps for you when you call crypto.generateKeyPairSync('rsa', options), where options is an object specifying the desired key size, encoding, and format.
 */

/**
 here is a step-by-step explanation of how to encrypt and decrypt the word "hello" using RSA public and private keys:

1. Generate the RSA public and private keys, as described in the previous answer.

2, To encrypt the word "hello" using the public key, we first need to convert it to a numerical value. One common method is to use ASCII encoding, where each character is represented by its corresponding ASCII code. In this case, "hello" would be represented as the string of numbers "104 101 108 108 111".

3. Next, we use the RSA encryption algorithm to encrypt the numerical value of "hello". This involves raising the value to the power of the public key exponent, and then taking the modulus of the result with the public key modulus. The formula for RSA encryption is:

ciphertext = (plaintext ^ public_key_exponent) mod public_key_modulus

In this case, we'll assume the public key modulus is 2048 bits and the public key exponent is 65537. We can convert the string of numbers "104 101 108 108 111" to a single numerical value using concatenation, so the plaintext is:

plaintext = 104101108108111

Then we can perform the RSA encryption as follows:

ciphertext = (plaintext ^ 65537) mod public_key_modulus

4. The resulting ciphertext will be another numerical value, which can be represented as a string of digits. This value is what we would transmit over an insecure channel.

5. To decrypt the ciphertext using the private key, we first need to convert it back to its numerical value. Then we use the RSA decryption algorithm, which is similar to the encryption algorithm, but uses the private key exponent and modulus instead:

plaintext = (ciphertext ^ private_key_exponent) mod private_key_modulus

In this case, we'll assume the private key exponent is 123456789 and the private key modulus is the same as the public key modulus, 2048 bits. We can convert the ciphertext back to its numerical value using the same method as before, so the ciphertext is:

ciphertext = <numerical value of ciphertext>

Then we can perform the RSA decryption as follows:

plaintext = (ciphertext ^ 123456789) mod private_key_modulus

6. The resulting plaintext will be the numerical value of the original message, which can be converted back to the string "hello" using ASCII decoding.
 */
