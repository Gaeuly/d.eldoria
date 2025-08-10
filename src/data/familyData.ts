// familyData.ts

export interface FamilyMemberData {
  id: string;       // Discord User ID
  role: string;     // Role dalam keluarga, contoh: Duke, Duchess, Elder
  roleLevel: number; // Level urutan role, semakin tinggi semakin atas
  bio?: string;     // (Opsional) deskripsi singkat anggota
}

export const familyMembers: FamilyMemberData[] = [
  {
    id: '500293365494054932',  // Ganti ini dengan Discord User ID asli
    role: 'Kaisar',
    roleLevel: 5,
    bio: 'Penguasa tertinggi keluarga Eldoria',
  },
  {
    id: '234567890123456789',
    role: 'Duchess',
    roleLevel: 4,
    bio: 'Permaisuri yang bijaksana dan elegan',
  },
  {
    id: '345678901234567890',
    role: 'Elder',
    roleLevel: 3,
    bio: 'Penasihat keluarga dan penjaga tradisi',
  },
  {
    id: '456789012345678901',
    role: 'Knight',
    roleLevel: 2,
    bio: 'Pelindung setia keluarga Eldoria',
  },
  {
    id: '567890123456789012',
    role: 'Peasant',
    roleLevel: 1,
    bio: 'Anggota baru yang penuh semangat',
  },
  {
    id: '567890123456789012',
    role: 'Members',
    roleLevel: 1,
    bio: 'Anggota baru yang penuh semangat',
  },
];
