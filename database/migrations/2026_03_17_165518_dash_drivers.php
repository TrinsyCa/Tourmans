<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dash_drivers', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('company_uuid');
            $table->string('name_surname')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->json('social_media')->nullable();
            $table->json('vehicle_info')->nullable();
            $table->json('notes')->nullable();
            $table->boolean('company_driver')->default(false)->nullable();
            $table->string('user_uuid')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dash_drivers');
    }
};
