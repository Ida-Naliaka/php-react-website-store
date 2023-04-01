<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3f196739b2efaa26d1632261ede53319
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3f196739b2efaa26d1632261ede53319::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3f196739b2efaa26d1632261ede53319::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit3f196739b2efaa26d1632261ede53319::$classMap;

        }, null, ClassLoader::class);
    }
}