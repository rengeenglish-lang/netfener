-- Data migration: the two free resources open Netfener's own word-list pages instead of placeholder files.
UPDATE "free_resources" SET "fileUrl" = '/kaynaklar/ucretsiz/yds-onemli-kelimeler', "description" = 'En sık çıkan 318 akademik kelime: anlamları ve örnek cümleleriyle.' WHERE "slug" = 'yds-onemli-kelimeler';
UPDATE "free_resources" SET "fileUrl" = '/kaynaklar/ucretsiz/yokdil-saglik-kelimeleri', "description" = '214 tıp ve sağlık terimi: araştırma dili ve A–Z tıbbi terminoloji, örnek cümleleriyle.' WHERE "slug" = 'yokdil-saglik-kelimeleri';
