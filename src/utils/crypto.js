import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3242342';
const iv = crypto.randomBytes(16);

/**
 * @description: 加密
 * @param {string} text 加密文本
 * @return {string} 加密后文本
 */
export function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return encrypted.toString('hex')
};
/**
 * @description: 解密
 * @param {string} hash 需要解密的
 * @return {string} 解密后
 */
export function decrypt(hash) {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv.toString('hex'), 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);
    return decrpyted.toString();
};
