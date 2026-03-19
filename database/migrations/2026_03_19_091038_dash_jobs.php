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
        Schema::create("dash_jobs", function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('company_uuid');
            $table->string('job_type')->nullable();
            $table->string('partner_id')->nullable();
            $table->string('driver_id')->nullable();
            $table->string('customer_id')->nullable();
            $table->string('passengers')->nullable();
            $table->string('pickup_location')->nullable();
            $table->string('dropoff_location')->nullable();
            $table->dateTime('pickup_time')->nullable();
            $table->dateTime('dropoff_time')->nullable();
            $table->json('payment_details')->nullable();
            $table->string('status')->nullable();
            $table->json('notes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dash_jobs');
    }
};
