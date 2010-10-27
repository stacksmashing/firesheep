/* This one still fails under some circumstances */
register({
        name: 'MeinVZ',
        url: 'http://www.meinvz.net/Home',
        domains: ['meinvz.net'],
        sessionCookieNames: ['s_sess', 's_pers','vz-status'],
        processPacket: function () {
            var s_sess = this.firstPacket.cookies['s_sess'];
            this.sessionId = s_sess;
        },
        identifyUser: function() {
            var resp = this.httpGet("http://www.meinvz.net/Home");
            var t = resp.body.querySelector('#comment-user-data');
            this.userName = t.getElementsByTagName('input')[0].value;
            this.userAvatar = t.getElementsByTagName('input')[3].value;        
        }       
});
