Package.describe({
    summary: "Accounts Templates styled for Twitter Bootstrap."
});

Package.on_use(function(api, where) {
    api.use([
        'templating',
        'less'
    ], 'client');

    api.add_files([
        'lib/accounts-templates-bootstrap.html',
        'lib/accounts-templates-bootstrap.js',
        'lib/accounts-templates-bootstrap.less'
    ], ['client']);

    api.use([
        'service-configuration',
        'accounts-base',
    ], ['client', 'server']);

    api.imply([
        'service-configuration',
        'accounts-base',
        'accounts-templates-core'
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use('accounts-templates-bootstrap');
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-templates-bootstrap_tests.js', ['client', 'server']);
});