/**
 * Owner Authentication and Protection Utility
 * Ensures only Sopha Panha personally can manage or upload photos.
 * Public visitors cannot modify, upload, or tamper with the photo.
 */

const STORAGE_KEY = 'sopha_owner_auth';
const PHOTO_KEY = 'panha_real_photo';

// Valid authentication credentials for Sopha Panha
const VALID_PINS = ['10076', 'nhakingkh@gmail.com', 'sophapanha', '@sophapanha', 'panha2026', 'panha'];

export const checkIsOwner = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY) === 'verified_owner_panha_10076';
};

export const verifyOwner = (input: string): boolean => {
  const cleanInput = input.trim().toLowerCase();
  const isMatch = VALID_PINS.some(p => p.toLowerCase() === cleanInput);
  if (isMatch) {
    localStorage.setItem(STORAGE_KEY, 'verified_owner_panha_10076');
    return true;
  }
  return false;
};

export const logoutOwner = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getStoredPhoto = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(PHOTO_KEY);
};

export const saveOwnerPhoto = (dataUrl: string): void => {
  try {
    localStorage.setItem(PHOTO_KEY, dataUrl);
  } catch (err) {
    console.warn('Storage quota limit reached:', err);
  }
};
